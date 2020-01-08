'use strict'
//Use AJAX, specifically $.get(), to read the provided JSON file.
// Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
function Horns(hornsF){
  this.image_url = hornsF.image_url;
  this.title = hornsF.title;
  this.horns = hornsF.horns;
  this.descriptions = hornsF.description;
  this.keyword = hornsF.keyword;
}

Horns.allHorns = [];

Horns.prototype.dropDown = {
  const  

}

Horns.prototype.render = function() {
  $('main').append('<div class="photo"></div>');
  let hornsPhoto = $('div[class="photo"]');

  let hornsHtml = $('#photo-template').html();

  hornsPhoto.html(hornsHtml);
  console.log(hornsPhoto.html);

  hornsPhoto.find('h2').text(this.title);
  hornsPhoto.find('img').attr('src', this.image_url);
  hornsPhoto.find('p').text(this.descriptions);
  hornsPhoto.removeClass('photo');
  hornsPhoto.attr('class', this.title);
};

Horns.readJson = () => {
  $.get('data/page-1.json')
    .then(data => {
      data.forEach(item => {
        Horns.allHorns.push(new Horns(item));
      });
    })
    .then(Horns.loadHorns);
};

Horns.loadHorns = () => {
  Horns.allHorns.forEach(horns => horns.render());
};

$(() => Horns.readJson());

Horns.loadHorns();
// Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.


