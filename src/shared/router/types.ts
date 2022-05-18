enum RouterNames {
  layout = '/',
  landing = '/',
  beats = '/beats',
  beat = '/beats/:id',
  crudBeats = '/beats/crud/:id',
  crudSoundKits = '/sound-kits/crud/:id',
  crudCollabs = '/collabs/crud/:id',
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
  admin = '/admin',
}

enum RouterPaths {
  landing = '/',
  beats = '/beats',
  soundKits = '/sound-kits',
  crudBeats = '/beats/crud',
  crudSoundKits = '/sound-kits/crud',
  crudCollabs = '/collabs/crud',
  collabs = '/collabs',
  contact = '/contact',
  profile = '/profile',
  about = '/about',
  membership = '/membership',
  offers = '/offers',
  purchases = '/purchases',
  admin = '/admin',
}

export { RouterNames, RouterPaths };
