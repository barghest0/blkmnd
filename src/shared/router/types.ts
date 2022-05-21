enum RouterNames {
  layout = '/',
  landing = '/',
  beats = '/beats',
  beat = '/beats/:id',
  soundKits = '/sound-kits',
  soundKit = '/sound-kits/:id',
  collabs = '/collabs',
  collab = '/collabs/:id',
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
  collabs = '/collabs',
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
