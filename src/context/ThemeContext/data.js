import react from '../../assets/react.png';
import node from '../../assets/node.png';
import js from '../../assets/js.png';
import redux from '../../assets/redux.jpg';
import python from '../../assets/python.jpg';
import django from '../../assets/django.png';
import drf from '../../assets/drf.png';
import flask from '../../assets/flask.png';
import jquery from '../../assets/jquery.png';
import mysql from '../../assets/mysql.png';
import c from '../../assets/c.jpg';
import cpp from '../../assets/cpp.jpg';
import bootstrap from '../../assets/bootstrap.png';


export const THEMES = {
    'python' : {
        backgroundImage: python,
        linearGradient: createLinearGradient('#3773a7', '#ffd241'),
        primaryColor: '#3773a7',
        color: '#222222'
    },
    'django': {
        backgroundImage: django,
        linearGradient: createLinearGradient('#0c3c26', '#d9c8de'),
        primaryColor: '#0c3c26',
        color: '#49D191'
    },
    'drf': {
        backgroundImage: drf,
        linearGradient: createLinearGradient('#853636', '#2d2d2d'),
        primaryColor: '#853636',
        color: '#2d2d2d'
    },
    'flask': {
        backgroundImage: flask,
        linearGradient: createLinearGradient('#f3f3f3', '#292d35'),
        primaryColor: '#292d35',
        color: '#2d2d2d'
    },
    'react' : {
        backgroundImage: react,
        linearGradient: createLinearGradient('#61dafb', '#222222'),
        primaryColor: '#61dafb',
        color: '#222222'
    },
    'node': {
        backgroundImage: node,
        linearGradient: createLinearGradient('#80BD01', '#333333'),
        primaryColor: '#80BD01',
        color: '#80BD01'
    },
    'javascript': {
        backgroundImage: js,
        linearGradient: createLinearGradient('#F7E018', '#000000'),
        primaryColor: '#F7E018',
        color: '#000000'
    },
    'jquery': {
        backgroundImage: jquery,
        linearGradient: createLinearGradient('#00598e', '#ffffff'),
        primaryColor: '#00598e',
        color: '#242A31'
    },
    'redux': {
        backgroundImage: redux,
        linearGradient: createLinearGradient('#764ABD', '#1E1E1E'),
        primaryColor: '#764ABD',
        color: '#1E1E1E'
    },
    'mysql': {
        backgroundImage: mysql,
        linearGradient: createLinearGradient('#4479a1', '#e6892e'),
        primaryColor: '#4479a1',
        color: '#e6892e'
    },
    'bootstrap': {
        backgroundImage: bootstrap,
        linearGradient: createLinearGradient('#62488a', '#ffffff'),
        primaryColor: '#62488a',
        color: '#e6892e'
    },
    'cpp': {
        backgroundImage: cpp,
        linearGradient: createLinearGradient('#234374', '#262c3a'),
        primaryColor: '#234374',
        color: '#262c3a'
    },
    'c': {
        backgroundImage: c,
        linearGradient: createLinearGradient('#3f47cc', '#fefefe'),
        primaryColor: '#3f47cc',
        color: '#e6892e'
    }
}

function createLinearGradient(color1, color2) {
    return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
