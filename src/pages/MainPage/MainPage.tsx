import { useState } from 'react';
import { Typography } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { TreeIcon } from '@/shared/icons';

import cls from './MainPage.module.scss';
import { Modal } from '@/sections';

export const MainPage = () => {
  const [open, setOpen] = useState(false);
  const [treeType, setTreeType] = useState(0);

  const onClick = (type: number) => {
    setTreeType(type);
    handleOpen();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className={cls.section}>
      <Typography
        className={cls.title}
        component="h1"
      >
        Daraxtlarni joylashishi boyicha ma'lumot
      </Typography>
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
                <TreeIcon onClick={onClick} />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
      <Modal
        open={open}
        treeType={treeType}
        handleClose={handleClose}
      />
    </section>
  );
};
