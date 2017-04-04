/**
 * Created by Dedrick Kitamuka on 04/04/2017.
 */

/** mainModule includes myServiceModule and myControllerModule,
* and it will be reference to the view as principal module
 * using ng-app directive
 **/

var mainModule = angular.module('mainModule', ['myServiceModule', 'myControllerModule']);

