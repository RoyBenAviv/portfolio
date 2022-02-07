'use strict';

$(init);

function init() {
  renderProjects();
}

$('.submit-btn').click(onSubmitForm);

function renderProjects() {

 const projects = getProjsForDisplay();
 const strHtmls = projects.map(proj => {
    return `
    <div class="col-md-4 col-sm-6 portfolio-item">  
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onOpenModal('${proj.id}')">
        <div class="portfolio-hover">
           <div class="portfolio-hover-content">
               <i class="fa fa-plus fa-3x"></i>
         </div>
        </div>
          <img class="img-fluid img-proj" src="img/portfolio/${proj.id}.jpg" alt="${proj.title}">
       </a>
      <div class="portfolio-caption">
        <h4 class="text-light">${proj.projName}</h4>
        <p class="text-light">${proj.title}</p>
      </div>
     </div>
  `;
  });
  $('.proj-list').html(strHtmls.join(''));
}


function onOpenModal(projId) {

  var proj = getProjById(projId)
  const strHTML = `<h2>${proj.projName}</h2>
  <p class="item-intro text-muted">${proj.title}</p>
  <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="${proj.title}">
  <button class="btn btn-success m-3" onclick="window.open('${proj.url}')">CLICK HERE TO OPEN THE PROJECT</button>
  <p>${proj.desc}</p>
  <ul class="list-inline">
    <li>Created At: ${new Date(proj.publishedAt).toDateString()}</li>
    <li>Category: Illustration</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>`

    $('.proj-modal').html(strHTML)
}


function onSubmitForm(ev) {
  ev.preventDefault();

  const subjectVal = $('#subject').val();
  const messageVal = $('#message').val();

  submitForm(subjectVal, messageVal)
  
}