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
  admin = '/admin',
  crud = '/admin/crud',
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
  admin = '/admin',
  crud = '/admin/crud',
}

enum CrudActions {
  update = 'update',
  create = 'create',
}

enum CrudNames {
  createBeat = 'beats/create',
  updateBeat = 'beats/update/:id',
  createSoundKit = 'sound-kits/create',
  updateSoundKit = 'sound-kits/update/:id',
  createCollab = 'collabs/create',
  updateCollab = 'collabs/update/:id',
}

export { RouterNames, RouterPaths, CrudNames, CrudActions };
