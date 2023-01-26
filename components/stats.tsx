import Widget from './statsWidget';
import Database from '../public/database.svg';

export default function Stats() {
    return (
        <div>
            <Database className="db icon-svg"/>
            <Widget />
        </div>
    )
}