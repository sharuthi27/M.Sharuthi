/* Navbar */

.navbar {

  display: flex;

  justify-content: space-between;

  align-items: center;

  background: #333;

  padding: 10px 20px;

}

.navbar .logo {

  color: #fff;

  font-size: 20px;

  font-weight: bold;

}

.nav-links {

  list-style: none;

  display: flex;

  gap: 15px;

}

.nav-links li a {

  color: #fff;

  text-decoration: none;

  font-size: 16px;

}

.menu-toggle {

  display: none;

  font-size: 24px;

  color: white;

  cursor: pointer;

}

/* Hero Section */

.hero {

  background: linear-gradient(to right, #001f3f, #0074D9);

  color: white;

  text-align: center;

  padding: 80px 20px;

}

.hero h1 span {

  color: #ffff66;

}

.btn {

  display: inline-block;

  margin-top: 15px;

  padding: 10px 20px;

  background: white;

  color: black;

  text-decoration: none;

  border-radius: 5px;

  font-weight: bold;

}

/* About Section */

.about {

  text-align: center;

  padding: 40px 20px;

}

.about-content {

  max-width: 600px;

  margin: auto;

}

.profile-img {

  width: 120px;

  height: 120px;

  border-radius: 50%;

  object-fit: cover;

  margin-bottom: 15px;

}

/* Mobile responsive */

@media (max-width: 768px) {

  .nav-links {

    display: none;

    flex-direction: column;

    background: #333;

    text-align: center;

    width: 100%;

  }

  .nav-links.show {

    display: flex;

  }

  .menu-toggle {

    display: block;

  }

}
