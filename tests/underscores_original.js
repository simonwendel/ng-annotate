/*
 * This file uses _ServiceName_ pattern that should be resolved into ServiceName by the injector at
 * runtime. However, the injector annotations need the single underscores removed.
 * */
(function() {
    angular
        .module('MyModWhateva')
        .controller('ControllerUsingUnderscoreServices', ControllerUsingUnderscoreServices);

    /** @ngInject */
    function ControllerUsingUnderscoreServices(_OneService_, __OtherService___, _Third, Fourth_, _InThe_Middle_,_O_) {
        _OneService_.doSomething();
        __OtherService___.doSomething();
        _Third.doSomething();
        Fourth_.doSomething();
        _InThe_Middle_.doSomething();
        _O_.doSomething();
    }
})();
