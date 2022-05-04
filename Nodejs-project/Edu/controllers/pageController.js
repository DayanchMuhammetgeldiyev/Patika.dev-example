exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (res, req) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
}

exports.getContactPage = (res, req) => {
    res.status(200).render('contact', {
        page_name: 'contact',
    });
};

exports.getCoursePage = (res, req) => {
    res.status(200).render('course', {
        page_name: 'course',
    });
}
