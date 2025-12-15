import { redirect } from 'react-router-dom';
import { createOrder, getMenu, getOrder } from './apiRestaurant';
import store from '../store';
import { clearCart } from '../features/cart/cartSlice';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

// parameter is an object ontent {params, request, context}
export async function orderLoader({ params }) {
  const order = await getOrder(params.orderId); // return object from fetching the data base on id which came from the url path
  return order; // useLoaderData hooks
}

// recieve the data from the form when action is run which is the request
export async function actionLoader({ request }) {
  const formData = await request.formData();

  // Convert to formData to an object
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  // Error handling early return we can display the data by using useActionData inside component which the funtion is connected
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';
  if (Object.keys(errors).length > 0) return errors;

  // New order Object comming from an api
  const newOrder = await createOrder(order);

  // Can effect performance
  store.dispatch(clearCart());

  // create a new response/request url to redirect to a new tab base on the url passed
  return redirect(`/order/${newOrder.id}`);
}
