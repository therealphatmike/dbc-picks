<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\PickRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

/**
 * Class PickCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class PickCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     *
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Pick::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/pick');
        CRUD::setEntityNameStrings('pick', 'picks');
    }

    /**
     * Define what happens when the List operation is loaded.
     *
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        // CRUD::setFromDb(); // set columns from db columns.

        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
        CRUD::column('race');
        CRUD::column('host');
        CRUD::column('driver.last_name')->label('driver');
        CRUD::column('regular_season')->type('boolean');
    }

    /**
     * Define what happens when the Create operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        // CRUD::setValidation(PickRequest::class);
        // CRUD::setFromDb(); // set fields from db columns.

        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */
        CRUD::field([
            'label' => 'Race',
            'type' => 'select',
            'name' => 'race_id',
            'entity' => 'race',
            'model' => 'App\Models\Race',
            'attribute' => 'displayName',
            'options'   => (function ($query) {
                return $query->orderBy('date', 'ASC')->get();
            }),
        ]);
        CRUD::field('host');
        CRUD::field([
            'label' => 'Driver',
            'type' => 'select',
            'name' => 'driver_id',
            'entity' => 'driver',
            'model' => 'App\Models\Driver',
            'attribute' => 'fullName',
            'options'   => (function ($query) {
                return $query->orderBy('last_name', 'ASC')->get();
            }),
        ]);
        CRUD::field('place');
        CRUD::field('points');
        CRUD::field('regular_season');
    }

    /**
     * Define what happens when the Update operation is loaded.
     *
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
