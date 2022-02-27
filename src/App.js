import './App.css';
import GenreFormContainer from './components/genre-form-container';

import { GenresContextProvider } from './service/genre-context';
import { FormContextProvider } from './service/form-context';

function App() {
  return (
    <>
      <GenresContextProvider>
        <FormContextProvider>
          <div className="page-container">
            <GenreFormContainer />
          </div>
        </FormContextProvider>
      </GenresContextProvider>
    </>
    
    
  );
}

export default App;
