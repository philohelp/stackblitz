import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const givenitems = [
  { id: "1", title: "vqjksdfjvm", color: "red" },
  { id: "2", title: "lkfqjdklmfjmq", color: "pink" },
  { id: "3", title: "fkqmjdfjkml", color: "brown" },
  { id: "4", title: "kjdfqhjkdhfqkl", color: "yellow" },
  { id: "5", title: "lkfqdklmfq", color: "blue" }
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const Dnd = props => {
  const [myItems, setMyItems] = useState(givenitems);
  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      myItems,
      result.source.index,
      result.destination.index
    );
    setMyItems(items);
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {myItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                            <div
          style={{ margin: 30, padding: 10, backgroundColor: item.color }}
        >
                      {item.title}
                              </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {myItems.map(item => (
        <div
          key={item.id}
          style={{ margin: 30, padding: 10, backgroundColor: item.color }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Dnd;
