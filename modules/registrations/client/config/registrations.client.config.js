(function () {
  'use strict';

  angular
    .module('registrations')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Registrations',
      state: 'registrations',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'registrations', {
      title: 'Team Registrations',
      state: 'registrations.list',
      roles: ['user','admin']
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'registrations', {
      title: 'New Team Registration',
      state: 'registrations.create',
      roles: ['user', 'admin']
    });
  }
}());
