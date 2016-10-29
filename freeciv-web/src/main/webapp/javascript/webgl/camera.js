/**********************************************************************
    Freeciv-web - the web version of Freeciv. http://play.freeciv.org/
    Copyright (C) 2009-2016  The Freeciv-web project

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

***********************************************************************/

var camera;

var camera_dx = 330;
var camera_dy = 900;
var camera_dz = 330;


/****************************************************************************

****************************************************************************/
function camera_look_at(x, y, z)
{
  camera.position.set( x + camera_dx, y + camera_dy, z + camera_dz);
  camera.lookAt( new THREE.Vector3(x , 0, z));



}