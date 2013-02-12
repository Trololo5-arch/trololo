// Generated by CoffeeScript 1.4.0

app.directive('sortable', function() {
  return {
    'link': function(scope, element, attrs) {
      return $(element).sortable({
        'connectWith': '.column',
        'appendTo': 'body',
        'revert': 0,
        'helper': 'clone',
        'start': function(e, ui) {
          var index;
          ui.helper.data('type', scope.type);
          index = $(ui.item).index();
          return scope.setDraggable({
            'index': $(ui.item).index(),
            'type': attrs.type
          });
        },
        'receive': function(e, ui) {
          return scope.$apply(scope.moveDragged(attrs.type, ui.item.index()));
        }
      }).disableSelection();
    }
  };
});