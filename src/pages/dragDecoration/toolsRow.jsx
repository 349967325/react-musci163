import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import styles from './index.module.scss'

class ToolsRow extends Component {
  static propTypes = {
    name: PropTypes.string,
    list: PropTypes.array
  }

  state = {}

  componentDidMount () {}

  render () {
    const { name = '', list = [] } = this.props

    return (
      <div className={`${styles.toolBrick}`}>
        <div className={`${styles.brickTitle}`}>
          <Icon type='caret-down' />
          <span className={`${styles.titleContent}`}>{name}</span>
        </div>

        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {
                list.map((item, i) => (
                  <Draggable key={item.id} draggableId={`draggable-${item.id}`} index={i} direction='horizontal'>
                    {(provided, snapshot) => (
                      <div
                        className={`${styles.subbrickItem}`} ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <img className={`${styles.pic}`} src={item.imageUrl} />
                        <img className={`${styles.pic} ${styles.hoverPic}`} src={item.hoverImage} />
                        <div className={`${styles.brickName}`}>{item.name}</div>
                      </div>
                    )}
                  </Draggable>

                ))
              }

            </div>
          )}

        </Droppable>

      </div>
    )
  }
}

export default ToolsRow
