class Index {
  static home(req, res) {
    res.status(200).json({
      status: 200,
      message: 'You\'re Welcome to Nodejs developed RESTFul APIs Solution of Nurudeen Soremekun for Natterbase Backend Engineer Application',
    });
  }

  static v1(req, res) {
    res.status(200).json({
      status: 200,
      message: 'You\'re Welcome to version 1 of Nodejs developed RESTFul APIs Solution of Nurudeen Soremekun for Natterbase Backend Engineer Application',
    });
  }
}

export default Index;
