import { Typography } from '@mui/material';

import { classNames } from '@/shared/lib/classNames';
import cls from './AboutPage.module.scss';


interface IAboutPageProps {
    className?: string;
}

export const AboutPage = (props: IAboutPageProps) => {
    const { className } = props;

    return (
        <section className={classNames(cls.aboutPage, {}, [className])}>
            <Typography
                className={cls.title}
                component="h1"
            >
                Biz haqimizda
            </Typography>
            <Typography
                className={cls.subTitle}
                component="h1"
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, reprehenderit? Consequatur modi enim nostrum architecto cupiditate a deleniti doloremque quod impedit? Totam, voluptatum pariatur alias dolor nesciunt nisi, exercitationem voluptatibus facilis vero deleniti dicta quaerat. Doloremque error nam omnis eveniet possimus vero in exercitationem rem recusandae cumque, modi repudiandae totam suscipit voluptate velit tempore expedita, fugiat amet ipsam! Ratione distinctio vel, laboriosam beatae minus expedita tenetur iste repellendus sunt officia laborum, quas obcaecati quasi est illo veritatis ipsam facilis voluptatibus. Rerum iusto, nulla odit ad impedit aliquid optio doloribus corrupti dolore assumenda, laudantium officiis vitae illo at quasi quis deleniti expedita commodi! Doloremque nostrum nulla at, blanditiis error voluptatum laudantium vero atque saepe minus culpa laboriosam. Porro excepturi earum laborum sit, itaque aspernatur cum quaerat voluptates magni minima! Molestias, officia consequuntur rem est eveniet sed neque obcaecati omnis accusamus voluptatum provident totam minus blanditiis molestiae odit rerum. Quo, iure nemo neque impedit enim voluptatum velit perferendis iste voluptatibus vero! Maiores saepe debitis dolor, nisi totam optio ipsum consequatur dolore rerum recusandae adipisci ipsa voluptate eveniet ullam voluptas neque, nostrum minima. Rerum quod distinctio, veritatis a soluta esse repudiandae necessitatibus earum unde id iure ipsum aliquam pariatur accusamus non voluptate quae.
            </Typography>
        </section>
    );
};
