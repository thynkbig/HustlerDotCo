<?php
function avada_child_scripts() {
	if ( ! is_admin() && ! in_array( $GLOBALS['pagenow'], array( 'wp-login.php', 'wp-register.php' ) ) ) {
		$theme_info = wp_get_theme();
		wp_enqueue_style( 'avada-child-stylesheet', get_template_directory_uri() . '/style.css', array(), $theme_info->get( 'Version' ) );
	}
}
add_action('wp_enqueue_scripts', 'avada_child_scripts');


if ( ! function_exists('homepage_list')) {
	function homepage_list() {
		echo '<div class="list">';
			$args = array (	'category_name'      => 'feature-stories' );
			$stories = new WP_Query( $args );

			if ( $stories->have_posts()) {
				echo '<ul class="post-list">';

					while ( $stories->have_posts() ) {

						$stories->the_post();
							echo '<div class="stuff"><li class="post-list-item">';
							if (has_post_thumbnail( $post->ID )) {
								$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
									<a class="link" href="<?php echo get_permalink() ?>">
									<div class="post-info" style="background-image: url('<?php echo $image[0]; ?>')">
										<div id="text"><p><b><?php echo get_the_title($post->ID); ?></b></p></div>
									</div>
									</a>
								
								<?php }
							echo '</li></div>';
						
					}

				echo '</ul>';
			}
		echo '</div>';
	}
}