const Footer = () => {
  return (
    <footer className="bg-gray-900 container mx-auto text-center p-10 text-sm text-teal-600 rounded-br-lg rounded-bl-lg border-t border-dashed border-teal-900">
      <p>&copy; {new Date().getFullYear} To Do App. All right reserved. </p>
    </footer>
  );
};

export default Footer;
