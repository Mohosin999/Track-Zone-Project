import { useState } from "react";
import shortid from "shortid";

/**
 * useEvents hooks
 */

const useEvents = () => {
  const [state, setState] = useState({});

  /**
   * get events by clock id
   *
   * @param {string} clockId - clock id will be a string
   * @returns
   */
  const getEventsByClockId = (clockId) => {
    return Object.keys(state).filter((item) => item.startsWith(clockId));
  };

  /**
   * get all events with object or array
   *
   * @param {boolean} isArray
   * @returns
   */
  const getEvents = (isArray = false) => {
    if (!isArray) return state;

    return Object.values(state);
  };

  /**
   * add event
   *
   * @param {object} event - event will be an object
   * @returns
   */
  const addEvent = (event) => {
    event.id = shortid.generate();
    const { id, clockId } = event;
    setState((prev) => ({
      ...prev,
      [`${clockId}|${id}`]: event,
    }));

    return event;
  };

  /**
   * event update
   *
   * @param {*} updatedEvent
   * @param {*} id
   */
  const updateEvent = (updatedEvent, id) => {
    const events = { ...state };
    events[id] = {
      ...events[id],
      ...updatedEvent,
    };

    setState(events);
  };

  /**
   * delete event by id
   *
   * @param {string} id - id will be a string
   */
  const deleteEvent = (id) => {
    const events = { ...state };
    delete events[id];
    setState(events);
  };

  /**
   * delete event by clockId
   *
   * @param {string} clockId
   */
  const deleteEventByClockId = (clockId) => {
    const events = Object.keys(state).filter(
      (item) => !item.startsWith(clockId)
    );

    setState(events);
  };

  return {
    events: state,
    getEventsByClockId,
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    deleteEventByClockId,
  };
};

export default useEvents;
