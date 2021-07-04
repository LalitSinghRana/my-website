import './App.css';
import {
	AppBar,
	Toolbar,
	Typography,
	makeStyles,
	Button,
	IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	Button: {
		margin: theme.spacing(1),
		color: '#000',
		backgroundColor: 'orange',
	},
	title: {
		flexGrow: 1,
	},
}));

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={classes.title}>
						News
					</Typography>
					<Button variant='contained' className={classes.Button}>
						Social Media
					</Button>
					<Button variant='contained' className={classes.Button}>
						My Ranking
					</Button>
					<Button variant='contained' className={classes.Button}>
						Make an entry
					</Button>
					<Button variant='contained' className={classes.Button}>
						Log In/Sign Up
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default App;
