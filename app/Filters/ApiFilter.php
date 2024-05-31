<?php

namespace App\Filters;

use Illuminate\Http\Request;

class ApiFilter
{
    protected $safeParms = [];

    protected $columnMap = [];

    protected $operatorMap = [];

    protected $idColumns = ['city_id', 'category_id'];

    public function transform(Request $request)
    {
        $eloQuery = [];

        foreach ($this->safeParms as $param => $operators) {
            $query = $request->query($param);

            if (!isset($query)) {
                continue;
            }

            $column = $this->columnMap[$param] ?? $param;

            if (in_array($param, $this->idColumns)) {
                $eloQuery[] = [$column, '=', $query];
                continue;
            }

            foreach ($operators as $operator) {
                if (isset($query[$operator])) {
                    $eloQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
                }
            }
        }

        return $eloQuery;
    }
}
