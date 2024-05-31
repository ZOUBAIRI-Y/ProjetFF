<?php

namespace App\Filters;

use App\Filters\ApiFilter;
use Illuminate\Http\Request;

class PropertyFilter extends ApiFilter
{
  protected $safeParms = [
    "rooms" => ["gt", "eq", "lt", "gte", "lte"],
    "space" => ["gt", "eq"],
    "price" => ["lte"],
    "city_id" => ["eq"],
    "rentingType" => ["eq"],
    "postDate" => ["gt", "eq", "lt", "gte", "lte"],
    "status" => ["eq"],
    "category_id" => ["eq"],
  ];

  protected $operatorMap = [
    'eq' => '=',
    'lt' => '<',
    'lte' => '<=',
    'gt' => '>',
    'gte' => '>=',
  ];

  protected $columnMap = [
    "rentingType" => "renting_type",
    "postDate" => "created_at",
  ];
}
