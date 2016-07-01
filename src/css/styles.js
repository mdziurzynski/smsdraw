export const styles = {
  main: {
    width: '60vh',
    height: '90vh',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainTop: {
    backgroundColor: 'red',
    height: '25vh',
  },
  mainBottom: {
    backgroundColor: 'yellow',
    height: '65vh',
  },
  stage: {
    display: 'inline-block',
    border: '1px solid green',
    width: 40,
    height: 40,
  },
  activeStage: {
    display: 'inline-block',
    border: '1px solid green',
    width: 40,
    height: 40,
    backgroundColor: 'green',
  },
  stageContainer: {
    display: 'inline-block',
    width: '100%',
    height: '100%',
    verticalAlign: 'top',
    WebkitTransition: 'width 0.5s ease-in-out',
    MozTransition: 'width 0.5s ease-in-out',
    OTransition: 'width 0.5s ease-in-out',
    transition: 'width 0.5s ease-in-out',
  },
  visibleContent: {
    visibility: 'visible',
    opacity: 1,
    transition: 'opacity 0.25s linear',
  },
  invisibleContent: {
    visibility: 'hidden',
    opacity: 0,
    transition: 'visibility 0s 0.25s, opacity 0.25s linear',
  },
};
