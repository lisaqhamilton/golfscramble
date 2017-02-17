(function () {
  'use strict';

  // Sponsors controller
  angular
    .module('sponsors')
    .controller('SponsorsController', SponsorsController);

  SponsorsController.$inject = ['$scope', '$state', '$window', 'Authentication', 'sponsorResolve'];

  function SponsorsController ($scope, $state, $window, Authentication, sponsor) {
    var vm = this;

    vm.authentication = Authentication;
    vm.sponsor = sponsor;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

//To upload an image to the create sponsor form
   // $scope.onFileSelect = function(image) {
   //          if (angular.isArray(image)) {
   //              image = image[0];
   //          }

   //          // This is how I handle file types in client side
   //          if (image.type !== 'image/png' && image.type !== 'image/jpeg') {
   //              alert('Only PNG and JPEG are accepted.');
   //              return;
   //          }

   //          $scope.uploadInProgress = true;
   //          $scope.uploadProgress = 0;

   //          $scope.upload = $upload.upload({
   //              url: '/upload/image',
   //              method: 'POST',
   //              file: image
   //          }).progress(function(event) {
   //              $scope.uploadProgress = Math.floor(event.loaded / event.total);
   //              $scope.$apply();
   //          }).success(function(data, status, headers, config) {
   //              $scope.uploadInProgress = false;
   //              // If you need uploaded file immediately 
   //              $scope.uploadedImage = JSON.parse(data);      
   //          }).error(function(err) {
   //              $scope.uploadInProgress = false;
   //              console.log('Error uploading file: ' + err.message || err);
   //          });
   //      };

   //  // Remove existing Sponsor
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.sponsor.$remove($state.go('sponsors.list'));
      }
    }

    // Save Sponsor
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.sponsorForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.sponsor._id) {
        vm.sponsor.$update(successCallback, errorCallback);
      } else {
        vm.sponsor.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('sponsors.view', {
          sponsorId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }


}());
