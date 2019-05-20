/**
 * Interface for Avenger model from server
 * @property { _id } string uniquie id of Avenger
 * @property { name } string name of Avenger
 * @property { image } string link to image of Avenger
 * @property { attributes } any object containing attributes of Avenger
 * @property { selected } boolean is Avenger selected, used in AvengersList component
 *
 * @export
 * @interface IAvenger
 */
export default interface IAvenger {
    _id: string;
    name: string;
    image: string;
    attributes: any;
    selected: boolean;
}