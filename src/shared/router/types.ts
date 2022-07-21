enum RouterNames {
  layout = '/',
  landing = '/',
  beats = '/beats',
  beat = '/beats/:id',
  soundKits = '/sound-kits',
  soundKit = '/sound-kits/:id',
  services = '/services',
  service = '/services/:id',
  contact = '/contact',
  profile = '/profile',
  about = '/about',
  membership = '/membership',
  offers = '/offers',
  purchases = '/purchases',
  admin = '/admin/*',
  cart = '/cart',
  notFound = '*',
}

enum RouterPaths {
  landing = '/',
  beats = '/beats',
  soundKits = '/sound-kits',
  services = '/services',
  contact = '/contact',
  profile = '/profile',
  about = '/about',
  membership = '/membership',
  offers = '/offers',
  purchases = '/purchases',
  cart = '/cart',
  admin = '/admin',
}

export { RouterNames, RouterPaths };
