import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppMenu from '../components/appmenu/app_menu';
import AboutUs from '../pages/about_us';
import ContactUs from '../pages/contact_us';
import Home from '../pages/home';

test('render home page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render about page', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test('render contact page', () => {
  render(<ContactUs />);
  const linkElement = screen.getByText(/contact/i);
  expect(linkElement).toBeInTheDocument();
});

test('render app menu page', () => {
  render(<AppMenu />);
  const linkLogo = screen.getByText(/Salamandra/i);
  const linkHome = screen.getByText(/Home/i);
  const linkContact = screen.getByText(/Contact Us/i);
  const linkAbout = screen.getByText(/About Us/i);


  expect(linkLogo).toBeInTheDocument();
  expect(linkHome).toBeInTheDocument();
  expect(linkContact).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
});