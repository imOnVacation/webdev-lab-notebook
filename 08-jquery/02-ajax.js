$(document).ready(() => {
  const url = 'https://anapioficeandfire.com/api/books/';

  const addBookToDOM = (item) => {
    $('#books').append(
      $('<div>')
        .css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        })
        .append($('<h2>').text(item.name))
        .append($('<p>').text(item.authors[0]))
        .append($('<p>').text(item.released.substr(0, 4)))
        .append($('<p>').text(`${item.numberOfPages} pages`))
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        data.forEach((item) => {
          addBookToDOM(item);
        });
      },
      error: (error) => {
        $('#books').append($('<div>').text('Error fetching data'));
      },
      complete: () => {
        $('#loading').remove();
      },
    });
  };

  fetchData(url);
});
