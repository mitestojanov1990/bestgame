import IAvenger from './../../../models/interfaces/IAvenger';

/**
 * Interface to get typed props inside AvengerCard component
 *
 * @export
 * @interface IAvengerCardProps
 */
export default interface IAvengerCardProps {
    avenger?: IAvenger;
    onClick: any;
}