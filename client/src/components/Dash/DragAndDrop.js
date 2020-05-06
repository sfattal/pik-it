import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const grid = 8

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
    // width: '500px',
    minWidth: '300px',
    maxWidth: '100%',
  });

  const getListStyle2 = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    // display: 'flex',
    padding: grid,
    overflow: 'auto',
    width: '300px',
    minHeight: '400px',
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `${grid/2}px`,
    borderRadius: '8px',
    borderWidth: '15px',
    borderColor: '#fff',
    overflow: 'auto',
  
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'white',
  
    // styles we need to apply on draggables
    ...draggableStyle,
  });

function DragAndDrop(props) {
    console.log("dragging and dropping")
    console.log(props)

    props.choices.map( choice => {

        console.log("choice ID: " + choice.id)
    
    })

    return (
    <DragDropContext onDragEnd={props.onDragEnd}>
    <div className="flex-column justify-content-center">
        <h5>Available choices:</h5>
        <div className="d-flex justify-content-center">
            <Droppable droppableId="allChoices" isDropDisabled={true} direction="horizontal">
                { (provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                    {props.choices.map( (choice, index) => (
                    <Draggable key={choice.id} draggableId={choice.choiceValue} index={index} type={choice.choiceType} onClick={props.onChoiceClick}>
                        {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={props.onChoiceClick}
                            style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                            )}
                        >
                            {choice.choiceType==="link" ?
                                        <a href={choice.choiceValue} target="_blank" rel="noopener noreferrer" >{choice.choiceLabel}</a> :
                                        <span>{choice.choiceLabel}</span>}
                        </div>
                        )}
                    </Draggable>
            ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
            
        </div>
        <br></br>
        <div className="d-flex flex-column justify-content-center">
            <h5>Rank your piks:</h5>
            <div className="d-flex justify-content-center">
            <Droppable droppableId="rankSelection" className="d-flex justify-content-center" direction="vertical">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle2(snapshot.isDraggingOver)}>
                            {props.rankings.map( (ranking, index) => (
                                
                                <Draggable key={ranking.id} draggableId={ranking.choiceValue} index={index} type={ranking.choiceType} onClick={props.onChoiceClick}>
                                    {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                        )}
                                    >
                                        {ranking.choiceType==="link" ?
                                        <a href={ranking.choiceValue} target="_blank" rel="noopener noreferrer" >{ranking.choiceLabel}</a> :
                                        <span>{ranking.choiceLabel}</span>}
                                    </div>
                                    )}
                                </Draggable>
                                
                                
                            ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable></div>
        </div>
    </div>
    </DragDropContext>
            // <div><h1>Hi</h1></div>
    )
}

export default DragAndDrop
