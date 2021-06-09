import React, { Component } from 'react'
import { Button } from 'antd'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import DecoraHeader from './decoraHeader'
import ToolsRow from './toolsRow'
import styles from './index.module.scss'

const ImageComponents = [
  {
    id: 1,
    name: '一行一张',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/a31216f8-4425-4cbd-8e92-e0e2e0185776.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/6c6c3cff-b87d-4588-b3fa-ac1870b174ec.png'
  },
  {
    id: 2,
    name: '一行四张',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/b017a51e-3719-4361-8438-3bdc9aa5d95f.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/318b5fa4-b3d7-4ef0-a701-3d1b9e991e86.png'
  },
  {
    id: 3,
    name: '一行五张',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/dc0d4bea-d343-43b8-8aad-9ee7593ac8fa.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/9e6320cd-9015-4424-be11-c51092a9475b.png'
  },
  {
    id: 4,
    name: '轮播图片',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/370f83a4-7592-4669-9abd-a1defa669367.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/d4932265-c36a-4912-811c-34bd3429f756.png'
  }
]

const ProductComponents = [
  {
    id: 1000,
    name: '一行五列',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/1002ded7-7c1a-4522-a6dc-04448ec78d61.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/dd65f21b-c2f1-47fc-8bbb-8d14f97bcda7.png'
  },
  {
    id: 1001,
    name: '两行四列',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/aa1787c7-c27c-4ccd-bf9b-6d8685a7c0ad.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/5184e824-d0f3-4db5-a2d4-7ea106787a54.png'
  },
  {
    id: 1002,
    name: '两行五列',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/5799a959-c0ad-41b0-90a7-5edb3f0df937.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/bd623601-f6bb-49b4-ad80-d022a7019444.png'
  },
  {
    id: 1003,
    name: '横滑商品',
    imageUrl: 'https://commimg.pddpic.com/mms_static/2019-10-13/5799a959-c0ad-41b0-90a7-5edb3f0df937.png',
    hoverImage: 'https://commimg.pddpic.com/mms_static/2019-10-13/bd623601-f6bb-49b4-ad80-d022a7019444.png'
  }
]

class DragDecoration extends Component {
  static propTypes = {}
  state = {}

  componentDidMount () {}

  handleChangeClone = (el) => {
    console.log(el)
  }

  render () {
    return (
      <div className={`${styles.pageWrap}`}>
        <DecoraHeader />

        <DragDropContext>
          <div className={`${styles.contentLand}`}>
            <div className={`${styles.toolsWrap}`}>
              <div className={`${styles.toolFlex}`}>
                <div className={`${styles.toolTit}`}>
                  <h3 className={`${styles.title}`}>开始装修</h3>
                  <p className={`${styles.explain}`}>拖拽或点击组件至中间画布的对应位置</p>
                </div>

                <div className={`${styles.toolContainer}`}>
                  <ToolsRow name='图片组件' list={ImageComponents} />

                  <ToolsRow name='商品组件' list={ProductComponents} />
                </div>

              </div>
            </div>
            <div className={`${styles.canvasWrap}`}>
              <div className={`${styles.canvasFlex}`}>
                <Droppable droppableId='canvasDrop'>
                  {(provided, snapshot) => (
                    <div
                      className={`${styles.canvasContent}`}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div>放置区</div>
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <div className={`${styles.valuesWrap}`}>
              <div className={`${styles.valuesFlex}`}>
                属性
              </div>
            </div>

          </div>
        </DragDropContext>

        <div className={`${styles.footerLand}`}>
          <Button type='primary'>提交发布</Button>
        </div>
      </div>
    )
  }
}

export default DragDecoration
