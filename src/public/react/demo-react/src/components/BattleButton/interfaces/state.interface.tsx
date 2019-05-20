import IAvenger from './../../../models/interfaces/IAvenger';
/**
 *
 * @export
 * @interface IBattleButtonState
 */
export default interface IBattleButtonState {
    loading: boolean;
    avengers?: IAvenger[];
}