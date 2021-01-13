import { all, call } from 'redux-saga/effects';

import { shopSages } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSage() {
  yield all([call(shopSages), call(userSagas), call(cartSagas)]);
}
