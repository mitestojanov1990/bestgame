import IAvenger from '../../../models/interfaces/IAvenger';
/**
 *
 * @export
 * @interface ISelectedAvengerCardState
 */
export default interface ISelectedAvengerCardState {
    loading: boolean;
    avenger?: IAvenger;
}