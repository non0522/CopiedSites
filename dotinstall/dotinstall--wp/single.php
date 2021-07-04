<?php get_header(); ?>
    <main id="main" class="container">
        <div id="posts">

            <?php
            if (have_posts()) :
                while (have_posts()) :
                    the_post() ;
            ?>

            <div class="post">
                <header class="post-header">
                    <h2>
                        <a href="<?php the_permalink(); ?>"><?php the_title();?></a>
                    </h2>
                    <div class="post-meta">
                        <?php echo get_the_date(); ?> 【<?php the_category(', '); ?>】
                    </div>
                </header>
                <div class="post-content">
                        <?php the_content(); ?>
                        <!-- <p>本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。本文。</p> -->
                </div>
            </div>

            <nav class="navigation">
                <div class="prev"><?php previous_post_link(); ?></div>
                <div class="next"><?php next_post_link(); ?></div>
            </nav>

            <?php
                endwhile;
            else:
            ?>

            <p>記事はありません</p>

            <?php
            endif;
            ?>



            

        </div><!-- /.posts -->
        <?php get_sidebar(); ?>

    </main><!-- /.main -->
<?php get_footer(); ?>