// Copyright 2026, University of Colorado Boulder

/**
 * NOTE Describe this class and its responsibilities
 *
 * @author Agustín Vallejo (PhET Interactive Simulations)
 */

import TModel from '../../../../joist/js/TModel.js';
import PickRequired from '../../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../../tandem/js/PhetioObject.js';

type SelfOptions = {
  //NOTE add options that are specific to RadioactiveDatingModel here
};

type RadioactiveDatingModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class RadioactiveDatingModel implements TModel {

  public constructor( providedOptions: RadioactiveDatingModelOptions ) {
    //NOTE
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //NOTE
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //NOTE
  }
}
