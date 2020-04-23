import React, { Component }  from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


// function Quote({ quote, index }) {
//   return (
//     <Draggable draggableId={quote.id} index={index}>
//       {provided => (
//         <QuoteItem
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           {quote.content}
//         </QuoteItem>
//       )}
//     </Draggable>
//   );
// }

// const QuoteList =  props.choices.map((choice, index) => (
//     <Draggable key={choice.id} draggableId={choice.id} index={index}>
//         {(provided, snapshot) => (
//         <div
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             // style={getItemStyle(
//             // snapshot.isDragging,
//             // provided.draggableProps.style
//             // )}
//         >
//             {choice.content}
//         </div>
//         )}
//     </Draggable>
    // <button choice={choice} index={index} key={choice.id}>
    // {choice.choice_text} </button>
//   ));
// });

const grid = 8

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    display: 'flex',
    padding: grid,
    overflow: 'auto',
    // width: '500px',
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
    borderRadius: '25px',
    borderWidth: '15',
    borderColor: '#fff',
  
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'white',
  
    // styles we need to apply on draggables
    ...draggableStyle,
  });

function DragAndDrop(props) {
    console.log("dragging and dropping")
    console.log(props)
    // const choices = props.choices
    // console.log(choices[0])
    // const choice1 = choices[0]
    // console.log(choice1)
    props.choices.map( choice => {
        console.log("choice ID: " + choice.id)
        // console.log("index: " + choice.index)
    })
    // console.log("choice1 id: " + choice1.id)

  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
    <div className="flex-column justify-content-center">
        <div><h5>Available choices:</h5>
            <Droppable droppableId="allChoices" direction="horizontal">
                { (provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                    {props.choices.map( (choice, index) => (
                    <Draggable key={choice.id} draggableId={choice.choice_text} index={index} onClick={props.onChoiceClick}>
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
                            {choice.choice_text}
                        </div>
                        )}
                    </Draggable>
            ))}
            {/* <QuoteList quotes={props.choices} /> */}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
        </div>
        <br></br>
        <div className="d-flex flex-column justify-content-center">
            <h5>Your piks:</h5>
            <div className="d-flex justify-content-center">
            <Droppable droppableId="rankSelection" className="d-flex justify-content-center" direction="vertical">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={getListStyle2(snapshot.isDraggingOver)}>
                            {props.rankings.map( (ranking, index) => (
                                <Draggable key={ranking.id} draggableId={ranking.choice_text} index={index} onClick={props.onChoiceClick}>
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
                                        {ranking.choice_text}
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
