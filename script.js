var $myGroup = $('#myGroup');
$myGroup.on('show','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});