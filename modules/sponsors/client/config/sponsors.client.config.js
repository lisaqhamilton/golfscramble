(function () {
  'use strict';

  angular
    .module('sponsors')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Sponsors',
      state: 'sponsors',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'sponsors', {
      title: 'Thank You To Our Sponsors',
      state: 'sponsors.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'sponsors', {
      title: 'Create Sponsor',
      state: 'sponsors.create',
      roles: ['user']
    });
  }
}());
