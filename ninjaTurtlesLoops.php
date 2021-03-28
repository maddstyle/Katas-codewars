// Trim last comma in each list 
// Apply keys to the attributes to make each one a little cleaner
// Add the attributes to a bulleted list 

<?php
$ninjaTurtles = array(
  'Leo' => array( 'bandana' => 'blue', 'weapon' => 'swords', 'role' => 'leader'),
  'Ralph' => array( 'bandana' => 'red', 'weapon' => 'sighs', 'role' => 'hot shot'),
  'Mikey' => array( 'bandana' => 'orange', 'weapon' => 'nunchucks', 'role' => 'fun one'),
  'Don' => array( 'bandana' => 'purple', 'weapon' => 'staff', 'role' => 'nerd')
);

foreach ( $ninjaTurtles as $turtle => $atts ) {
  echo "<h4>$turtle:</h4>";
  echo '<ul>';
  foreach ( $atts as $label => $attr ) {
      echo "<li>$label: $attr</li>";
  }
  echo '</ul>';
}