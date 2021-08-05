import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import './Header.css';
import category from '../../data/category';
const Header = (props) => {
    const { category: categories, setCategory,word,setWord, lightMode } = props;
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode? "#000" : "#fff",
            },
            type: lightMode? "light": 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }
    return (
        <div className="header">

            <span className="title"> {word? word: "Dictionary"} </span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search for a word"
                        value={word}
                        onChange={(e)=>setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        label="Language"
                        select
                        value={categories}
                        onChange={(e) => handleChange(e.target.value)}                    >
                        {category.map((options) => {
                            return (
                                <MenuItem key={options.label} value={options.label}>
                                    {options.value}
                                </MenuItem>
                            )
                        })}


                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Header;