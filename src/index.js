// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import Storage from './storage.js';
import Interactive from './Interactiv.js';

document.addEventListener('DOMContentLoaded', () => Storage.displaytodo());

const describ = document.querySelector('.enter-todo');
const form = document.querySelector('.form');
form.addEventListener('submit', () => Storage.Addtodo(describ.value));

const comp = document.querySelector('.clear-all-completed');
comp.addEventListener('click', () => {
  Interactive.clearcomplt();
});
