import * as types from '../constants/actionTypes';

export function openModal(e) {
  e.preventDefault();
  return { type: types.OPEN_MODAL };
}

export function closeModal() {
  return { type: types.CLOSE_MODAL };
}

export function copyToClipboard(e) {
  e.preventDefault();
  e.target.select();
  document.execCommand('copy');
  return { type: types.COPY_MAIL };
}
