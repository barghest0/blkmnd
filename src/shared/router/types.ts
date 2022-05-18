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
}

enum CrudNames {
  beat = '/admin/beats',
  soundKits = '/admin/sound-kits',
  collabs = '/admin/collabs',
}

enum CrudPaths {
  update = 'update',
  create = 'create',
}

enum CrudActions {
  create = 'create',
  update = 'update/:id',
}

export { RouterNames, RouterPaths, CrudNames, CrudActions, CrudPaths };
