import './styles.css';
import {RandomNumber} from './template.js';

$(document).ready(function(){
  $('#theButton').click(function(){
    var random = new RandomNumber();
    $('#output').text(random);
  });
});
