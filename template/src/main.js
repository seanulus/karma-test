import './styles.css';
import {RandomNumber} from './template.js';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function(){
  $('#theButton').click(function(){
    $('#output').text(RandomNumber());
  });
});
