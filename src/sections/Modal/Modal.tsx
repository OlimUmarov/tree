import Image from 'next/image';
import { Modal as MuiModal, Fade, Box, Typography, Backdrop, Stack, Icon } from '@mui/material';
import trees from '@/app/data/trees.json';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CloseIcon from '@mui/icons-material/Close';

import cls from './Modal.module.scss';


interface IModalProps {
    className?: string;
    open: boolean;
    treeType: number;
    handleClose: () => void;
}

export const Modal = (props: IModalProps) => {
    const { open, handleClose, treeType = 0 } = props;

    return (
        <MuiModal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box className={cls.modal}>
                    <Icon
                        onClick={handleClose}
                        className={cls.icon}
                    >
                        <CloseIcon />
                    </Icon>
                    <Stack
                        direction="row"
                        spacing={4}
                    >
                        <div className={cls.zoom}>
                            <TransformWrapper
                                initialScale={1}
                                minScale={1}
                                maxScale={3}
                            >
                                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                    <>
                                        <div className={cls.buttons}>
                                            <button onClick={() => zoomIn()}>+</button>
                                            <button onClick={() => zoomOut()}>-</button>
                                        </div>
                                        <TransformComponent>
                                            <Image
                                                width={400}
                                                height={350}
                                                src={trees[treeType || 0].image || ''}
                                                alt='tree'
                                                className={cls.image}
                                            />
                                        </TransformComponent>
                                    </>
                                )}
                            </TransformWrapper>
                        </div>
                        {/* <Image
                            width={400}
                            height={350}
                            src={trees[treeType || 0].image || ''}
                            alt='tree'
                            className={cls.image}
                        /> */}
                        <Stack
                            direction="column"
                            spacing={1}
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                className={cls.contentItem}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.title}
                                >
                                    ИД раками:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.subTitle}
                                >
                                    {trees[treeType || 0].id}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                className={cls.contentItem}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.title}
                                >
                                    Вилоят:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.subTitle}
                                >
                                    {trees[treeType || 0].region}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                className={cls.contentItem}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.title}
                                >
                                    Туман:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.subTitle}
                                >
                                    {trees[treeType || 0].area}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                className={cls.contentItem}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.title}
                                >
                                    Дарахт тури:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.subTitle}
                                >
                                    {trees[treeType || 0].type}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                className={cls.contentItem}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.title}
                                >
                                    Масъул ташкилот:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.subTitle}
                                >
                                    {trees[treeType || 0].responsible_institution}
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                className={cls.contentItem}
                            >
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.title}
                                >
                                    Манзил:
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="h2"
                                    className={cls.subTitle}
                                >
                                    {trees[treeType || 0].location}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Fade>
        </MuiModal>
    );
};
